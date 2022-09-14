@props([
    'closeOnClick' => true
])

<div 
    {{ $attributes->merge(['class' => 'modal__bottom']) }}
    @if ($closeOnClick)
        @click="close"
    @endif
>
    {!! $slot !!}
</div>