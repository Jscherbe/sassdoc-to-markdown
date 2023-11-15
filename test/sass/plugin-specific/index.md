---
title: Plugin-specific
sassdocGroupName: plugin-specific
---


# Plugin-specific


<div class="sassdoc-intro">
  
These are extended features provided by this library
  
</div>
    


## Mixins




###  print-color() {#mixin-print-color} 

<small>Mixin&ensp;|&ensp;Access: Public</small>

  

In addition to the code block example this example will show the compiled result. Note the  {compile} modifier on the example. It also uses the compiler annotation to load the module for the compiled example. Content in the compiler annotation are prepended to the compiled code for the item or group if at file-level)
    
    


<SassdocDetails summary="Meta Information">

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** mixin
- **Lines (comments):** 7-11
- **Lines (code):** 13-17

</SassdocDetails>
    
    

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
    
    


<SassdocDetails summary="Meta Information">

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** mixin
- **Lines (comments):** 19-21
- **Lines (code):** 23-23

</SassdocDetails>
    
    

#### Examples

This example will be previewed      


``` html
<span class="test">This is a test</span>
```
  

      
  
  