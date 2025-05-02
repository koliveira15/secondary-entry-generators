import {formatFiles, Tree, workspaceRoot,} from '@nx/devkit';
import {LibraryGeneratorSchema} from './schema';

export async function libraryGenerator(
  tree: Tree,
  _options: LibraryGeneratorSchema
) {
  tree.write(`${workspaceRoot}/hello-world.txt`, `Hello World`);
  await formatFiles(tree);
}

export default libraryGenerator;
