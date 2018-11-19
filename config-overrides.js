
module.exports = function override(config, env){
  config.output.filename = 'static/js/[name].js';
  config.output.chunkFilename = 'static/js/[name].chunk.js';

  //CSS Overrides
  config.plugins.forEach(function(item){
    if(item.constructor.name === "MiniCssExtractPlugin"){
      item.options.filename = 'static/css/[name].css';
    }
  });
    
  config.optimization.splitChunks = {
      cacheGroups: {
          default: false,
      },
  };

  config.optimization.runtimeChunk = false;
  return config;
}
