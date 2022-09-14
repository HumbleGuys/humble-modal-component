<x-layout>
    <x-modal::base
        active-body-class="myModal--isActive"
        name="myModal"
        :default-open="[
            'storage' => 'localStorage',
            'id' => 'myModale'
        ]"
    >
        <x-modal::backdrop />



        <x-modal::inner>
            <x-modal::top style="display: flex; justify-content:flex-end">
                <x-modal::closeButton />
            </x-modal::top>

            <x-modal::body>
                <h1>
                    My modal
                </h1>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos asperiores repellendus sequi! Debitis nam animi repellat. Officia rerum laborum in nulla cupiditate mollitia earum inventore, commodi voluptates veritatis fugit a.
                </p>
    
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos asperiores repellendus sequi! Debitis nam animi repellat. Officia rerum laborum in nulla cupiditate mollitia earum inventore, commodi voluptates veritatis fugit a.
                </p>
    
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos asperiores repellendus sequi! Debitis nam animi repellat. Officia rerum laborum in nulla cupiditate mollitia earum inventore, commodi voluptates veritatis fugit a.
                </p>    

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos asperiores repellendus sequi! Debitis nam animi repellat. Officia rerum laborum in nulla cupiditate mollitia earum inventore, commodi voluptates veritatis fugit a.
                </p>    

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos asperiores repellendus sequi! Debitis nam animi repellat. Officia rerum laborum in nulla cupiditate mollitia earum inventore, commodi voluptates veritatis fugit a.
                </p>    
            </x-modal::body>

            <x-modal::bottom />
        </x-modal::inner>


    </x-modal::base>

    <div>
        <x-modal::trigger name="myModal">
            Open my modal
        </x-modal::trigger>
    </div>
</x-layout>