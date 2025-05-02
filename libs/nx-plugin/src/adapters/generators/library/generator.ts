import {formatFiles, Tree,} from '@nx/devkit';
import {libraryGenerator as jsLibraryGenerator} from "@nx/js";
import {LibraryGeneratorSchema} from './schema';

export async function libraryGenerator(
  tree: Tree,
  _options: LibraryGeneratorSchema
) {
  await jsLibraryGenerator(tree, {
    name: 'my-lib',
    directory: 'libs/my-lib',
    bundler: 'tsc',
    unitTestRunner: 'none',
    projectNameAndRootFormat: 'as-provided'
  });
  await formatFiles(tree);
}

export default libraryGenerator;
