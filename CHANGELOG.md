# Change Log

## 0.0.12

- Fix content blocks (add notes to lib/defaults.js on settings), add tests for this
- Add HTML preview like the vitepress version (just outputted as-is), add configuration for this, add tests for this

## 0.0.11

- Add variable name to codeblock output and semicolon wehn a variable is printed in _code annotations (so it doesn't break syntax highlighting)

## 0.0.9

- Add escape method for things being recognized as attributes in markdown (markdown-it-attrs) (ie. 'this error is missing #{ $var }') which aren't actually markdown attributes but sass at the end of a line
  - Only added to the following annotations: thow, description, todo (for now)

## 0.0.8 

- Fix wrapping in _code custom annotation in "{}", which is for css/placeholder. With that you can choose what to include (config.showSourceCode)
  - Now only css and placeholder type are wrapped for code block outputs
- Add type "variable" to defaults showSourceCode, I feel like if you are documenting a specific variable it would seem likely you want to show it's default value. Especially for maps (rather than documenting simple maps)
  - This can be configured by setting showSourceCode to ["css", "placeholder"] instead.