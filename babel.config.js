module.exports = {
   presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      // Runtime automatic with React 17+ allows not importing React
      // in files only using JSX (no state or React methods)
      ['@babel/preset-react', { runtime: 'automatic' }]
   ],
   'plugins': [
      [
         '@babel/plugin-transform-runtime',
         {
            'regenerator': true
         }
      ]
   ]
};