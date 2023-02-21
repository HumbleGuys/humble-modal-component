@props([
    'name',
    'transitionName' => 'modal',
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
        x-transition:enter="{{ $transitionName }}-enter"
        x-transition:enter-start="{{ $transitionName }}-enter-start"
        x-transition:enter-end="{{ $transitionName }}-enter-end"
        x-transition:leave="{{ $transitionName }}-leave"
        x-transition:leave-start="{{ $transitionName }}-leave-start"
        x-transition:leave-end="{{ $transitionName }}-leave-end"
        x-show="isOpen"
        id="{{ $name }}"
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
        <link rel="stylesheet" href="{{ asset('../vendor/humble-guys/humble-modal-component/public/resources/dist/style.css?v=0.0.2') }}">
        <script module defer src="{{ asset('../vendor/humble-guys/humble-modal-component/public/resources/dist/humble-modal-component.umd.js?v=0.0.2') }}"></script>
    @endpush
@endonce
