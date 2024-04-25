![Screenshot of a 3D printer printing a STL model](/media/hero.jpg)

# React Three Fiber 3D printer print visualization
A 3D printer visualization based on real STL file. It's based on the React Three Fiber, data prepared by transforming G-code to JSON.

## Demo
Go to [https://3d-printer.zdenekloula.com/](https://3d-printer.zdenekloula.com/).

## Optimize commands

### Optimize GLB File

```
gltf-transform optimize ./public/model.glb ./public/model-optimized.glb --texture-compress webp --simplify false --instance false --join false --flatten false
```

### Transform GLTF into JSX

```
npm run gltfjsx
```

## Possible improvements

- Move processing of data to webworker so we don't block the main thread
