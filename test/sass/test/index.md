---
title: Test
sassdocGroupName: test
---


# Test


<div class="sassdoc-intro">
  
This is a group description. It describes the group.
It can be split across multiple lines.
  
</div>
    


## Variables




###  $variable-specific-test {#variable-variable-specific-test} 

<small>Variable&ensp;|&ensp;Access: Private&ensp;|&ensp;Type: {*}</small>

  

This is a test variable aiming at testing:
- `@prop`
- `@type`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** variable
- **Lines (comments):** 102-109
- **Lines (code):** 111-111

</SassdocDetails>
    
    

#### Map Properties


|Name|Type|Default|Description|
|:--|:--|:--|:--|
|base.first-key|String|"default"|Description|
|base.second-key|String|42|Description|

    
  ,
## Mixins




###  mixin-specific-test() {#mixin-mixin-specific-test} 

<small>Mixin&ensp;|&ensp;Access: Private</small>

  

This is a test mixin aiming at testing:
- `@content`
- `@param`
- `@output`
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 83-96
- **Lines (code):** 98-98

</SassdocDetails>
    
    

#### Parameters


|Name|Type|Default|Description|
|:--|:--|:--|:--|
|$number|`Number`|42|Number|
|$extra-arguments|`Arglist`||Extra arguments|
|@content|`content block`||Content is parsed and whatever.|

    

#### Mixin Output

Nothing

    

#### Throw

- This is an error.
    


###  autofill-test() {#mixin-autofill-test} 

<small>Mixin&ensp;|&ensp;Access: Private</small>

  

This is a test aiming at testing:
- autofilled `@requires`
- autofilled `@error`
- autofilled `@content`
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 123-126
- **Lines (code):** 128-139

</SassdocDetails>
    
    

#### Throw

- This is an autofilled error
    

#### Require

- [mixin-specific-test()](/sass/test/#mixin-mixin-specific-test)
- [function-specific-test()](/sass/test/#function-function-specific-test)
- [alias-test()](/sass/test/#function-alias-test)
- [alias-test-aliased()](/sass/test/#function-alias-test-aliased)
- [%placeholder-specific-test](/sass/test/#placeholder-placeholder-specific-test)
- [$variable-specific-test](/sass/test/#variable-variable-specific-test)
  


###  autofill-test-handwritten() {#mixin-autofill-test-handwritten} 

<small>Mixin&ensp;|&ensp;Access: Private</small>

  

This is a test that autofill can be overwritten.
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 144-146
- **Lines (code):** 148-152

</SassdocDetails>
    
    

#### Require

- [$variable-specific-test](/sass/test/#variable-variable-specific-test)
- [function-specific-test()](/sass/test/#function-function-specific-test)
- [mixin-specific-test()](/sass/test/#mixin-mixin-specific-test)
  


###  autofill-test-not-found() {#mixin-autofill-test-not-found} 

<small>Mixin&ensp;|&ensp;Access: Private</small>

  

This is a test that autofill should report not found
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** mixin
- **Lines (comments):** 154-155
- **Lines (code):** 156-157

</SassdocDetails>
    
    
  ,
## Functions




###  function-specific-test() {#function-function-specific-test} 

<small>Function&ensp;|&ensp;Access: Private</small>

  

This is a test function aiming at testing:
- `@param`
- `@return`
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 67-77
- **Lines (code):** 79-79

</SassdocDetails>
    
    

#### Parameters


|Name|Type|Description|Default|
|:--|:--|:--|:--|
|$arg|`*`|Whatever||
|$extra-arguments|`List`|Extra arguments|()|

    

#### Returns


|Type|Description|
|:--|:--|
|*|Anything|

    

#### Throw

- This is an error.
    


###  alias-test() {#function-alias-test} 

<small>Function&ensp;|&ensp;Access: Private</small>

  

This is a test function aiming at testing:
- `@alias`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 161-164
- **Lines (code):** 166-166

</SassdocDetails>
    
    


###  alias-test-aliased() {#function-alias-test-aliased} 

<small>Function&ensp;|&ensp;Access: Private</small>

  

This is a test function aiming at testing:
- `@alias`
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Aliased:** alias-test
- **Lines (comments):** 168-169
- **Lines (code):** 171-171

</SassdocDetails>
    
    


###  alias-test-should-warn() {#function-alias-test-should-warn} 

<small>Function&ensp;|&ensp;Access: Private</small>

  

This is a test function aiming at testing:
- `@alias`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 173-176
- **Lines (code):** 178-178

</SassdocDetails>
    
    
  ,
## Placeholders




###  %placeholder-specific-test {#placeholder-placeholder-specific-test} 

<small>Placeholder&ensp;|&ensp;Access: Private</small>

  

This is a test placeholder aiming at testing:
- `@throw`

    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** placeholder
- **Lines (comments):** 114-117
- **Lines (code):** 119-119

</SassdocDetails>
    
    

#### Throw

- This is an error.
    


###  %placeholder-[blue,green,red] {#placeholder-placeholder-[blue,green,red]} 

<small>Placeholder&ensp;|&ensp;Access: Private</small>

  

This is a test placeholder aiming at testing:
- `@name`
    
    


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** placeholder
- **Lines (comments):** 180-182
- **Lines (code):** 184-184

</SassdocDetails>
    
    
  ,
## Css




###  data-foo {#css-data-foo} 

<small>Css&ensp;|&ensp;Access: Private</small>

  

This is a test CSS block.
    
    

``` scss
{
  color: red;
}
```
  


<SassdocDetails summary="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** css
- **Lines (comments):** 186-187
- **Lines (code):** 189-189

</SassdocDetails>
    
    
  
  