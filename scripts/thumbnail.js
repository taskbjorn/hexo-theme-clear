//description Get the thumbnail url from a post
hexo.extend.helper.register('thumbnail', function (post) {
    return post.thumbnail || post.banner || '';
});
