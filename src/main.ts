import { Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './app/app.config';
import { Ps3FinderComponent } from './app/components/ps3-finder-component/ps3-finder-component';
import { createApplication } from '@angular/platform-browser';

async function initializeAndDefineWebComponent(
  component: Type<any>,
  tag: string
) {
  const appRef = await createApplication(appConfig);

  const customElement = createCustomElement(component, {
    injector: appRef.injector
  });

  if (!customElements.get(tag)) {
    customElements.define(tag, customElement);
    console.log(`Web Component '${tag}' registrado.`);
  }
}

initializeAndDefineWebComponent(Ps3FinderComponent, 'ps3-finder-web-component')
  .catch(err => console.error('Error al inicializar la aplicación de Angular para Web Component:', err));
