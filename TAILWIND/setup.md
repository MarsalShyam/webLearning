## How to setup Tailwind css

step 1: Run the follwing commands

```
 npm install -D tailwindcss
npx tailwindcss init
```

step 2: Update the tailwind.conf.js file to include this line:

```
content: ["*.html"],
```

step 3: create src/input.css to include: 

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step 4: Include the src/output.css file to your html
```
<link href="./output.css" rel="stylesheet">
```
step t: Run the following commands:

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

step additional: make the command as a scripts in package.json.
```
"scripts": {
    "build":"npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  },

  run => npm run build
```