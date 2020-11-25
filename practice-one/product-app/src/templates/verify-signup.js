exports.render = (email) => {
  return `<form>
  <div class="list">
    <label class="item item-input item-stacked-label">
      <span class="input-label">Email</span>
      <input type="text" value="${email}" data-email>
   </label>
   <label class="item item-input item-stacked-label">
     <span class="input-label">Code</span>
     <input type="text" data-code>
   </label>
  </div>
  <div class="padding">
   <button class="button button-positive button-block">
     <i class="ion-thumbsup"></i> Verify
   </button>
  </div>
  </form>`;
};