$(document).ready(() => {

  $(document).on('click', '#eatABurger', e => {
    e.preventDefault();
    $('#eatABurgerInfo').toggle('show');
  });

  $(document).on('click', '#friendFinder', e => {
    e.preventDefault();
    $('#friendFinderInfo').toggle('show');
  });

  $(document).on('click', '#gifMenagerie', e => {
    e.preventDefault();
    $('#gifMenagerieInfo').toggle('show');
  });

  $(document).on('click', '#crystalCollector', e => {
    e.preventDefault();
    $('#crystalCollectorInfo').toggle('show');
  });

  $(document).on('click', '#psychicGame', e => {
    e.preventDefault();
    $('#psychicGameInfo').toggle('show');
  });

  $(document).on('click', '#iTGenerator', e => {
    e.preventDefault();
    $('#iTGeneratorInfo').toggle('show');
  });

  $(document).on('click', '#bucketMERN', e => {
    e.preventDefault();
    $('#bucketMERNInfo').toggle('show');
  });

});