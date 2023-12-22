# Change Log

## 0.0.8 

- Fix wrapping in _code custom annotation in "{}", which is for css/placeholder. With that you can choose what to include (config.showSourceCode)
  - Now only css and placeholder type are wrapped for code block outputs
- Add type "variable" to defaults showSourceCode, I feel like if you are documenting a specific variable it would seem likely you want to show it's default value. Especially for maps (rather than documenting simple maps)
  - This can be configured by setting showSourceCode to ["css", "placeholder"] instead.