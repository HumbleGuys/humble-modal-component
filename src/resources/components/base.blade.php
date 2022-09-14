@props([
    'name',
    'transitionName' => 'drawer',
    'activeBodyClass' => '',
    'defaultOpen' => false,
])

@push('bottom')
    <div
        x-data="modal({
            id: '{{ $name }}',
            activeBodyClass: '{{ $activeBodyClass }}',
            defaultOpen: {{ json_encode($defaultOpen) }}
        })"
        x-transition:enter="modal-enter"
        x-transition:enter-start="modal-enter-start"
        x-transition:enter-end="modal-enter-end"
        x-transition:leave="modal-leave"
        x-transition:leave-start="modal-leave-start"
        x-transition:leave-end="modal-leave-end"
        x-show="isOpen"
        id="modal"
        {{ $attributes->merge(['class' => 'modal']) }}
        role="region"
        tabindex="-1"
        x-cloak
    >
        {!! $slot !!}
    </div>
@endpush  

@once
    @push('head')
        <link rel="stylesheet" href="{{ asset('../vendor/humble-guys/humble-modal-component/public/resources/dist/style.css?v=0.0.1') }}">
        <script module defer src="{{ asset('../vendor/humble-guys/humble-modal-component/public/resources/dist/humble-modal-component.umd.js?v=0.0.1') }}"></script>
    @endpush   
@endonce 