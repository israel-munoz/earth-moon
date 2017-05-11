# earth-moon
## From Earth to the Moon. A CSS variables exercise

This is an example for using CSS variables with animations.
CSS variables are initialized inside a selector, which will be its scope. Any "child" selector for this one will have the same variable.

``` CSS
:root {
    --sizeBase: 100px;
}

.container {
    width: calc(var(--sizeBase) * 8);
    font-size: calc(var(--sizeBase) * .2);
}
```

Any property defined to use a variable will apply the inherited value.
However, if a more specific selector replaces the variable value, the property will apply the new value instead.

``` CSS
.planet {
    background-image: var(--image);
}
.planet .earth {
    --image: url('imgs/earth.png');
}
.planet .mars {
    --image: url('imgs/mars.png');
}
```

## Relative values
In this example, there are some base values for size, position and time properties.
Every size and position property in the page elements is relative to those values.
For the animations, they are all relative to the time base. The delay for each element
also depends on the previous ones. Each element sums the duration of its predecessors
to begin its animation.


## Browser support
Support for required CSS specifications is defined at http://www.caniuse.com/

This test is mainly based on the following standards:
- CSS Custom Properties for Cascading Variables Module Level 1 (draft) https://drafts.csswg.org/css-variables/
- CSS Transforms Module Level 1 https://www.w3.org/TR/css-transforms-1/
- CSS Animations https://www.w3.org/TR/css3-animations/
- CSS Values and Units Module Level 3 (for calc function) https://www.w3.org/TR/css3-values/#calc-notation

Firefox supports all of these specifications. However, it doesn't support the use of
time variables in the calc() function, which means the animation won't work.

At the moment of this publication, Chrome is the only browser to run the test correctly.




## De la Tierra a la Luna. Un ejercicio con variables de CSS
Esto es un ejemplo del uso de variables de CSS con animaciones.
Las variables de CSS son inicializadas dentro de un selector, lo cual
define su alcance. Cualquier selector "hijo" para éste tendrá la
misma variable.

``` CSS
:root {
    --sizeBase: 100px;
}

.container {
    width: calc(var(--sizeBase) * 8);
    font-size: calc(var(--sizeBase) * .2);
}
```

Cualquier propiedad definida para usar una variable aplicará el valor
heredado. Sin embargo, si un selector más específico reemplaza su valor,
la propiedad aplicará dicho valor nuevo.

``` CSS
.planet {
    background-image: var(--image);
}
.planet .earth {
    --image: url('imgs/earth.png');
}
.planet .mars {
    --image: url('imgs/mars.png');
}
```

## Valores relativos
En este ejemplo, hay algunos valores base parapropiedades de tamaño,
posición y tiempo. Cada propiedad de tamaño y posición en los elementos de
la página es relativo a dichos valores.
Para las animaciones, éstas son relativas al tiempo base. El retraso para
cada elemento depende también de los anteriores. Cada elemento suma la duración
de sus predecesores para comenzar su animación.

## Soporte de navegadores
El soporte para las especificaciones de CSS requeridas está definido en http://www.caniuse.com/

Este ejercicio está basado principalmente en los siguientes estándares:
- CSS Custom Properties for Cascading Variables Module Level 1 (draft) https://drafts.csswg.org/css-variables/
- CSS Transforms Module Level 1 https://www.w3.org/TR/css-transforms-1/
- CSS Animations https://www.w3.org/TR/css3-animations/
- CSS Values and Units Module Level 3 (for calc function) https://www.w3.org/TR/css3-values/#calc-notation

Firefox soporta todas estas especificaciones. Sin embargo, no soporta el uso de
variables de tiempo en la función calc(), lo que significa que la animación no
funcionará.

Al momento de esta publicación, Chrome es el único navegador que corre la prueba correctamente.