<?php

namespace HumbleModalComponent;

use Illuminate\Support\ServiceProvider as SupportServiceProvider;

class ServiceProvider extends SupportServiceProvider
{
    public function register(): void
    {
        $this->loadViewsFrom(__DIR__.'/resources', 'modal');
    }

    public function boot(): void
    {
    }
}
