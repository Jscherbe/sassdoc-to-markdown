---
title: Test
sassdocGroupName: test
---


# Test

This is a group description. It describes the group.
It can be split across multiple lines.



## Variables




###  $variable-specific-test {#variable-variable-specific-test} 

<small>Variable&ensp;|&ensp;Access: Private&ensp;|&ensp;Type: {*}</small>

  

This is a test variable aiming at testing:
- `@prop`
- `@type`

    
    

``` scss
$variable-specific-test: ();
```
  

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** variable
- **Lines (comments):** 102-109
- **Lines (code):** 111-111
    
    

#### Map Properties


|Name|Type|Default|Description|
|:--|:--|:--|:--|
|base.first-key|String|"default"|Description|
|base.second-key|String|42|Description|

    
  

## Functions




###  function-specific-test() {#function-function-specific-test} 

<small>Function&ensp;|&ensp;Access: Private</small>

  

This is a test function aiming at testing:
- `@param`
- `@return`
- `@throw`

    
    

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 67-77
- **Lines (code):** 79-79
    
    

#### Parameters


|Name|Type|Description|Default|
|:--|:--|:--|:--|
|$arg|`*`|Whatever||
|$extra-arguments|`List`|Extra arguments|()|

    

#### Returns


|Type|Description|
|:--|:--|
|*|Anything
|

    

#### Throw

- This is an error.
    


###  alias-test() {#function-alias-test} 

<small>Function&ensp;|&ensp;Access: Private</small>

  

This is a test function aiming at testing:
- `@alias`

    
    

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 161-164
- **Lines (code):** 166-166
    
    


###  alias-test-aliased() {#function-alias-test-aliased} 

<small>Function&ensp;|&ensp;Access: Private</small>

  

This is a test function aiming at testing:
- `@alias`
    
    

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Aliased:** alias-test
- **Lines (comments):** 168-169
- **Lines (code):** 171-171
    
    


###  alias-test-should-warn() {#function-alias-test-should-warn} 

<small>Function&ensp;|&ensp;Access: Private</small>

  

This is a test function aiming at testing:
- `@alias`

    
    

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** function
- **Lines (comments):** 173-176
- **Lines (code):** 178-178
    
    
  

## Placeholders




###  %placeholder-specific-test {#placeholder-placeholder-specific-test} 

<small>Placeholder&ensp;|&ensp;Access: Private</small>

  

This is a test placeholder aiming at testing:
- `@throw`

    
    

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** placeholder
- **Lines (comments):** 114-117
- **Lines (code):** 119-119
    
    

#### Throw

- This is an error.
    


###  %placeholder-[blue,green,red] {#placeholder-placeholder-[blue,green,red]} 

<small>Placeholder&ensp;|&ensp;Access: Private</small>

  

This is a test placeholder aiming at testing:
- `@name`
    
    

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** placeholder
- **Lines (comments):** 180-182
- **Lines (code):** 184-184
    
    
  

## CSS




###  data-foo {#css-data-foo} 

<small>Css&ensp;|&ensp;Access: Private</small>

  

This is a test CSS block.
    
    

``` scss
{
  color: red;
 }
```
  

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** css
- **Lines (comments):** 186-187
- **Lines (code):** 189-195
    
    


###  .some-class {#css-.some-class} 

<small>Css&ensp;|&ensp;Access: Private</small>

  

This is documenting some-class
    
    

``` scss
{
  background: red;
 }
```
  

#### Details

- **File:** _sassdoc.scss
- **Group:** test
- **Type:** css
- **Lines (comments):** 191-191
- **Lines (code):** 193-195
    
    
  
  