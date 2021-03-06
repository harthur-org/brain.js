import { ILayer } from '../layer/base-layer';

export function checkSameSize(layer1: ILayer, layer2: ILayer): void {
  if (layer1.width !== layer2.width) {
    throw new Error(
      `Layer width mismatch of ${layer1.width} and ${layer2.width}`
    );
  }

  if (layer1.height !== layer2.height) {
    throw new Error(
      `Layer height mismatch of ${layer1.height} and ${layer2.height}`
    );
  }
}
