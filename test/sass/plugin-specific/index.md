---
title: Plugin-specific
sassdocGroupName: plugin-specific
---


# Plugin-specific

These are extended features provided by this library








This is a generic content block above all items with a list
- It also has an example
    
    

#### Examples

      


``` scss
.hello {
  color: red;
}
```
  



      
  

## Variables




###  $another-number {#variable-another-number} 

<small>Variable&ensp;|&ensp;Access: Public</small>

  

Testing variable
    
    

``` scss
$another-number: 3;
```
  

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** variable
- **Lines (comments):** 27-27
- **Lines (code):** 29-29
    
    


###  $map {#variable-map} 

<small>Variable&ensp;|&ensp;Access: Public</small>

  

Testing how map variables print
    
    

``` scss
$map: (
  "hello" : "world"
);
```
  

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** variable
- **Lines (comments):** 49-49
- **Lines (code):** 51-53
    
    


###  $number {#variable-number} 

<small>Variable&ensp;|&ensp;Access: Public</small>

  

Testing how single line variable print
    
    

``` scss
$number: 3;
```
  

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** variable
- **Lines (comments):** 55-55
- **Lines (code):** 57-57
    
    
  

## Mixins




###  print-color() {#mixin-print-color} 

<small>Mixin&ensp;|&ensp;Access: Public</small>

  

In addition to the code block example this example will show the compiled result. Note the  {compile} modifier on the example. It also uses the compiler annotation to load the module for the compiled example. Content in the compiler annotation are prepended to the compiled code for the item or group if at file-level)
    
    

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** mixin
- **Lines (comments):** 14-18
- **Lines (code):** 20-24
    
    

#### Examples

This example will be compiled      



``` scss
@include specific.print-color(red);
```
  

``` css
.some-class {
  background: red;
}

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
- **Lines (comments):** 43-45
- **Lines (code):** 47-47
    
    

#### Examples

This example will be previewed      


``` html
<span class="test">This is a test</span>
```
  


##### Preview

<div>
<span class="test">This is a test</span>
</div>

    

      
  

## CSS




###  .some-class {#css-.some-class} 

<small>Css&ensp;|&ensp;Access: Public</small>

  

This is documenting some-class
    
    

``` scss
{
  background: red;
 }
```
  

#### Details

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** css
- **Lines (comments):** 31-31
- **Lines (code):** 33-57
    
    



This is a generic content block
- between print-color and some-class (when not by type)
- between print-color and some-mixin (by type)

    
    
  
  