<x-layout>
    <x-modal::base
        name="myModal"
        :default-open="true"
    >
        <x-modal::backdrop />

        <x-modal::inner>
            <x-modal::closeButton />

            My modal
        </x-modal::inner>
    </x-modal::base>
</x-layout>