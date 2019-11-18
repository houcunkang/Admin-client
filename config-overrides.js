const {override,fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
	fixBabelImports('import',{ //配置babel-plugin-import
		libraryName: 'antd', //针对antd
		libraryDirectory: 'es',//源码中的es文件夹
		style: true, //自动打包相关的css
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {'@primary-color':'#1DA57A'},
	}),
);

