@props([
    'name',
])

<button
    x-data
    type="button"
    {{ $attributes }}
    @click="$store.modal.open('{{ $name }}')"
>
    {!! $slot !!}
</button>