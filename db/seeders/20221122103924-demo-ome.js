// Normatizar o código, ajuda evitar gambiarras 
'use strict';

// Seeders para cadastrar registro na tabela "situations"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    // Cadastrar o registro na tabela "omes"
    return queryInterface.bulkInsert('omes', [
      {nome: 'DPO', id_diretoria: 1},
      {nome: 'DIM', id_diretoria: 2},
      {nome: 'DIRESP', id_diretoria: 3},
      {nome: 'DINTER I', id_diretoria: 4},
      {nome: 'DINTER II', id_diretoria: 5},
      {nome: '1º BPM', id_diretoria: 2},
      {nome: '6º BPM', id_diretoria: 2},
      {nome: '11º BPM', id_diretoria: 2},
      {nome: '12º BPM', id_diretoria: 2},
      {nome: '13º BPM', id_diretoria: 2},
      {nome: '16º BPM', id_diretoria: 2},
      {nome: '17º BPM', id_diretoria: 2},
      {nome: '18º BPM', id_diretoria: 2},
      {nome: '19º BPM', id_diretoria: 2},
      {nome: '20º BPM', id_diretoria: 2},
      {nome: '25º BPM', id_diretoria: 2},
      {nome: '26º BPM', id_diretoria: 2},
      {nome: 'UNIDADE', id_diretoria: 2},
      {nome: 'UNIDADE', id_diretoria: 2},
      {nome: '1º BIESP', id_diretoria: 3},
      {nome: '2º BIESP', id_diretoria: 3},
      {nome: 'BEPI', id_diretoria: 3},
      {nome: 'BOPE', id_diretoria: 3},
      {nome: 'BPCHOQUE', id_diretoria: 3},
      {nome: 'BPGD', id_diretoria: 3},
      {nome: 'BPRP', id_diretoria: 3},
      {nome: 'BPRV', id_diretoria: 3},
      {nome: 'BPTRAN', id_diretoria: 3},
      {nome: 'CIATUR', id_diretoria: 3},
      {nome: 'CIPCAES', id_diretoria: 3},
      {nome: 'CIPMOTO', id_diretoria: 3},
      {nome: 'CIPOMA', id_diretoria: 3},
      {nome: 'RPMON', id_diretoria: 3},
      {nome: 'UNIDADE', id_diretoria: 3},
      {nome: 'UNIDADE', id_diretoria: 3},
      {nome: '2º BPM', id_diretoria: 4},
      {nome: '4º BPM', id_diretoria: 4},
      {nome: '9º BPM', id_diretoria: 4},
      {nome: '10º BPM', id_diretoria: 4},
      {nome: '15º BPM', id_diretoria: 4},
      {nome: '21º BPM', id_diretoria: 4},
      {nome: '22º BPM', id_diretoria: 4},
      {nome: '24º BPM', id_diretoria: 4},
      {nome: '3ª CIPM', id_diretoria: 4},
      {nome: '5ª CIPM', id_diretoria: 4},
      {nome: '6ª CIPM', id_diretoria: 4},
      {nome: '8ª CIPM', id_diretoria: 4},
      {nome: '10ª CIPM', id_diretoria: 4},
      {nome: '11ª CIPM', id_diretoria: 4},
      {nome: 'UNIDADE', id_diretoria: 4},
      {nome: 'UNIDADE', id_diretoria: 4},
      {nome: '3º BPM', id_diretoria: 5},
      {nome: '5º BPM', id_diretoria: 5},
      {nome: '7º BPM', id_diretoria: 5},
      {nome: '8º BPM', id_diretoria: 5},
      {nome: '14º BPM', id_diretoria: 5},
      {nome: '23º BPM', id_diretoria: 5},
      {nome: '1ª CIPM', id_diretoria: 5},
      {nome: '2ª CIPM', id_diretoria: 5},
      {nome: '4ª CIPM', id_diretoria: 5},
      {nome: '7ª CIPM', id_diretoria: 5},
      {nome: '9ª CIPM', id_diretoria: 5},
      {nome: 'UNIDADE', id_diretoria: 5},
      {nome: 'UNIDADE', id_diretoria: 5},
      {nome: '2ª EMG', id_diretoria: 1},
      {nome: 'ADAGRO', id_diretoria: 1},
      {nome: 'AG', id_diretoria: 1},
      {nome: 'CREED', id_diretoria: 1},
      {nome: 'OLS', id_diretoria: 1},
      {nome: 'DASDH', id_diretoria: 1},
      {nome: 'DASIS', id_diretoria: 1},
      {nome: 'PE', id_diretoria: 1},
      {nome: 'SEFAZ', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},
      {nome: 'UNIDADE', id_diretoria: 1},

  ]);
  },

  async down () {
    
  }
};