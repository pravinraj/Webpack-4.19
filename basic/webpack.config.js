var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports={
   entry: './app/index.jsx',
	
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 6050,
      historyApiFallback: {
            index: './app/index.html'
      }//Use to direct the page to index html while refresh the app
   },
   devtool: 'source-map',
   target: 'web',
   cache: true,
	
   module:{
    rules:[
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          }          
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[path][name].[ext]",
            }
          }
        ]
      },
      {
        test:/\.scss$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader: 'sass-loader'
          }          
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new CopyWebpackPlugin([{ from: './app/docs/', to: 'doc/' }],{
      ignore: [
          // Doesn't copy any files with a txt extension    
          '*.txt'
      ],
      copyUnmodified: true
    })
  ]
};