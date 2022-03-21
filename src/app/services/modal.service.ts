import { Injectable } from '@angular/core';

interface Imodal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: Imodal[] = [];
  constructor() {}

  register(id: string) {
    this.modals.push({ id, visible: false });
  }
  unregister(id: string) {
    this.modals = this.modals.filter((elem) => elem.id === id);
  }
  isModalOpen(id: string): boolean {
    return !!this.modals.find((elem) => elem.id === id)?.visible;
  }
  toggleModal(id: string) {
    const modal = this.modals.find((elem) => elem.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
