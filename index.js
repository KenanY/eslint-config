/* eslint quote-props: 0 */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'semistandard'
  ],
  rules: {
    'array-bracket-newline': [1, 'consistent'],
    'array-callback-return': 2,
    'array-element-newline': 0,
    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: false }],
    'arrow-parens': [2, 'always'],
    'block-scoped-var': 2,
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'callback-return': 0,
    'capitalized-comments': 0,
    'class-methods-use-this': 2,
    'complexity': 0,
    'consistent-return': 1,
    'consistent-this': 0,
    'default-case': [1, { commentPattern: '^no default$' }],
    'dot-notation': [1, { allowKeywords: true }],
    'func-name-matching': 0,
    'func-names': 0,
    'func-style': 0,
    'function-paren-newline': [2, 'consistent'],
    'global-require': 0,
    'guard-for-in': 2,
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'implicit-arrow-linebreak': [2, 'beside'],
    'linebreak-style': [2, 'unix'],
    'max-lines': 0,
    'max-statements-per-line': 0,
    'multiline-ternary': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-confusing-arrow': [2, { allowParens: true }],
    'no-console': 1,
    'object-curly-spacing': 1,
    'operator-linebreak': [1, 'before'],
    'space-before-function-paren': [2, 'never'],

    'import/default': 0,
    'import/dynamic-import-chunkname': 0,
    'import/exports-last': 1,
    'import/extensions': 0,
    'import/group-exports': 0,
    'import/imports-first': 0,
    'import/max-dependencies': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/newline-after-import': 1,
    'import/no-absolute-path': 0,
    'import/no-amd': 0,
    'import/no-anonymous-default-export': 0,
    'import/no-commonjs': 0,
    'import/no-cycle': [2, { maxDepth: Infinity }],
    'import/no-default-export': 0,
    'import/no-deprecated': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-internal-modules': 0,
    'import/no-mutable-exports': 0,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-named-default': 0,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/no-relative-parent-imports': 0,
    'import/no-restricted-paths': 0,
    'import/no-self-import': 2,
    'import/no-unassigned-import': 0,
    'import/no-unresolved': 0,
    'import/no-useless-path-segments': 2,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'import/unambiguous': 0,

    // Disabled because test fixtures' dependencies are not installed, which
    // causes this rule to fail some tests.
    'node/no-missing-require': 0,
    'node/no-unsupported-features/es-syntax': 0,

    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 0
  }
};
