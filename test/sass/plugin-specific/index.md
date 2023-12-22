---
title: Plugin-specific
sassdocGroupName: plugin-specific
---


# Plugin-specific

These are extended features provided by this library



## Variables




###  $map {#variable-map} 

<small>Variable&ensp;|&ensp;Access: Public</small>

  

Testing how map variables print
    
    

``` scss
(
  "hello" : "world"
)
```
  

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** variable
- **Lines (comments):** 25-25
- **Lines (code):** 27-29
    
    


###  $number {#variable-number} 

<small>Variable&ensp;|&ensp;Access: Public</small>

  

Testing how single line variable print
    
    

``` scss
3
```
  

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** variable
- **Lines (comments):** 31-31
- **Lines (code):** 33-33
    
    
  

## Mixins




###  print-color() {#mixin-print-color} 

<small>Mixin&ensp;|&ensp;Access: Public</small>

  

In addition to the code block example this example will show the compiled result. Note the  {compile} modifier on the example. It also uses the compiler annotation to load the module for the compiled example. Content in the compiler annotation are prepended to the compiled code for the item or group if at file-level)
    
    

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** mixin
- **Lines (comments):** 7-11
- **Lines (code):** 13-17
    
    

#### Examples

This example will be compiled      



``` scss
@include specific.print-color(red);
```
  

``` css
.test {
  color: red;
}
```
  

      


###  some-mixin() {#mixin-some-mixin} 

<small>Mixin&ensp;|&ensp;Access: Public</small>

  

In addition to the html example this will also be previewed in an iframe. Note the {preview} modifier. Settings are available to add stylesheet and javascript to iframe. Iframe used for isolation from docs styles. 
    
    

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** mixin
- **Lines (comments):** 19-21
- **Lines (code):** 23-23
    
    

#### Examples

This example will be previewed      


``` html
<span class="test">This is a test</span>
```
  

      
  
  