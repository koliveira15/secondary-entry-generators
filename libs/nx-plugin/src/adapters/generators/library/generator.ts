import {formatFiles, names, Tree,} from '@nx/devkit';
import {libraryGenerator as jsLibraryGenerator} from "@nx/js";
import {LibraryGeneratorSchema} from './schema';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  const normalizedName = names(options.name).fileName;
  await jsLibraryGenerator(tree, {
    name: normalizedName,
    directory: `libs/${normalizedName}`,
    bundler: 'tsc',
    unitTestRunner: 'none',
    projectNameAndRootFormat: 'as-provided',
  });
  await formatFiles(tree);
}

export default libraryGenerator;
