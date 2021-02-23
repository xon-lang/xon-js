import { FunctionExpressionTree } from '@xon/ast';
import { getExpressionTranslator, translateExpressionTree } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class FunctionExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: FunctionExpressionTree) {
        super();
    }

    translate() {
        const object = getExpressionTranslator(this.tree.object).translate();
        const args = this.tree.args
            .map((x) => x.value)
            .map(translateExpressionTree)
            .join(', ');
        return `${object}(${args})`;
    }
}
