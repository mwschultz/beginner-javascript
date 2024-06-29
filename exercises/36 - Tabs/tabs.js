const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll(('[role="tab"]'));
const tabPanels = Array.from(tabs.querySelectorAll(['[role="tabpanel"]']));

function handleTabClick(event) {
  tabPanels.forEach(pnl => { pnl.hidden = true });

  tabButtons.forEach(tb => { tb.setAttribute('aria-selected', false) });

  event.currentTarget.setAttribute('aria-selected', true);

  const { id } = event.currentTarget;

  const thePanel = tabPanels.find(pn =>
    pn.getAttribute('aria-labelledby') === id);


  thePanel.hidden = false;

}

tabButtons.forEach(buttons => buttons.addEventListener('click', handleTabClick));