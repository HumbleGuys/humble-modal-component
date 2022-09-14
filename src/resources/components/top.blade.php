@props([
    'closeOnClick' => true
])

<div 
    {{ $attributes->merge(['class' => 'modal__top']) }}
    @if ($closeOnClick)
        @click="close"
    @endif
>
    {!! $slot !!}
</div>