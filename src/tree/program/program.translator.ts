import { ProgramTree } from '@xon/ast';
import { NL, NL2 } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { DefinitionTranslator } from '../definition/definition.translator';
import { LibraryTranslator } from '../library/library.translator';
import { getStatementTranslator } from '../statement/statement-helper';

export class ProgramTranslator extends BaseTranslator {
    constructor(public tree: ProgramTree) {
        super();
    }

    translate() {
        const libraries = this.tree.libraries.map((x) => new LibraryTranslator(x).translate());

        const statements = this.tree.statements.map((x) => getStatementTranslator(x).translate());

        const definitions = this.tree.definitions.map((x) =>
            new DefinitionTranslator(x).translate()
        );

        return [libraries, statements, definitions]
            .map((x) => x.join(NL))
            .filter((x) => x)
            .join(NL2);
    }
}
