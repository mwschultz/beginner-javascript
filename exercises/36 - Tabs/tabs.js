const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  tabButtons.forEach((button) => {
    button.setAttribute('aria-selected', false);
  });

  event.currentTarget.setAttribute('aria-selected', true);

  const { id } = event.currentTarget;
  // tabs.querySelector(`[aria-labelledby="${id}"]`).hidden = false;
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabClick);
  console.log('d');
});

function showAdminPanel() {
  console.log('OK!');
}
