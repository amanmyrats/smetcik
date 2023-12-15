export const headerNavItems = [
  {
    label: 'Chantier',
    // routerLink: 'chantier',
    styleClass: 'headerMenuItem',
    // icon: 'icon-speedometer',
    items: [
      {
        label: 'Dashboard',
        routerLink: 'chantier',
        styleClass: 'headerMenuSubItem',
      },
      {
        label: 'Fiche Produits',
        routerLink: 'chantier/materialcards',
        styleClass: 'headerMenuSubItem',
      },
      {
        label: 'Create Fiche Produit',
        routerLink: 'chantier/materialcards/create',
        styleClass: 'headerMenuSubItem',
      },
      {
        label: 'Materials',
        routerLink: 'chantier/materials',
        styleClass: 'headerMenuSubItem',
      },
      {
        label: 'Create Material',
        routerLink: 'chantier/materials/create',
        styleClass: 'headerMenuSubItem',
      },
      {
        label: 'Inventories',
        routerLink: 'chantier/inventories',
        styleClass: 'headerMenuSubItem',
      },
      // {
      //   label: 'Create Inventory',
      //   routerLink: 'chantier/inventories/create',
      //   styleClass: 'headerMenuSubItem',
      // }
    ]
  },
  {
    label: 'Service Achat',
    // routerLink: 'chantier',
    styleClass: 'headerMenuItem',
    // icon: 'icon-speedometer',
    items: [
      {
        label: 'Dashboard',
        routerLink: 'achat',
        styleClass: 'headerMenuSubItem',
      },
      {
        label: 'Orders',
        routerLink: 'achat/orders',
        styleClass: 'headerMenuSubItem',
      },
      // {
      //   label: 'Create Order',
      //   routerLink: 'achat/orders/create',
      //   styleClass: 'headerMenuSubItem',
      // }
    ]
  },
  {
    label: 'Logistics',
    // routerLink: 'chantier',
    styleClass: 'headerMenuItem',
    // icon: 'icon-speedometer',
    items: [
      {
        label: 'Dashboard',
        routerLink: 'logistics'
      },
      {
        label: 'Factures',
        routerLink: 'logistics/factures'
      },
      // {
      //   label: 'Create Facture',
      //   routerLink: 'logistics/factures/create'
      // }
    ]
  },
  {
    label: 'QS',
    // routerLink: 'qs',
    styleClass: 'headerMenuItem',
    // icon: 'icon-speedometer',
    items: [
      {
        label: 'Dashboard',
        routerLink: 'qs'
      },
      {
        label: 'Annexe5s',
        routerLink: 'qs/annexe5s'
      }
    ]
  },
];
