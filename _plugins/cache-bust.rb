# based on https://distresssignal.org/busting-css-cache-with-jekyll-md5-hash
# https://gist.github.com/BryanSchuetz/2ee8c115096d7dd98f294362f6a667db
module Jekyll
  module CacheBust
    class CacheDigester
      require 'digest/md5'
      require 'pathname'

      attr_accessor :file_name, :directory

      def initialize(file_name:, directory: nil)
        self.file_name = file_name
        self.directory = directory
      end

      def digest!
        [file_name, '?', Digest::MD5.hexdigest(file_contents)].join
      end

      private

      def directory_files_content
        target_path = File.join(directory, '**', '*')
        # Sort so the digest does not depend on the filesystem's traversal order.
        Dir[target_path].sort.map{|f| File.read(f) unless File.directory?(f) }.join
      end

      def source_path
        return nil unless file_name.index('assets/')
        file_name.slice((file_name.index('assets/')..-1)).sub(/\?.*\z/, '')
      end

      def file_content
        path = source_path
        return '' if path.nil?
        File.file?(path) ? File.read(path) : ''
      end

      # A .css URL under assets/ is usually generated from a .scss source that is
      # never written to disk under that name, so hashing the .css path alone
      # yields the digest of an empty string. Hash the .scss source instead.
      def stylesheet_content
        path = source_path
        return '' if path.nil?
        [path.sub(/\.css\z/, '.scss'), path].each do |candidate|
          return File.read(candidate) if File.file?(candidate)
        end
        ''
      end

      def file_contents
        is_directory? ? file_content : stylesheet_content + directory_files_content
      end

      def is_directory?
        directory.nil?
      end
    end

    def bust_file_cache(file_name)
      CacheDigester.new(file_name: file_name, directory: nil).digest!
    end

    def bust_css_cache(file_name)
      # The sass partials live in _sass/ at the repo root, not assets/_sass.
      # Pointing at the latter globbed zero files, so every stylesheet shipped
      # the same constant digest and browsers never refetched a changed theme.
      CacheDigester.new(file_name: file_name, directory: '_sass').digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)