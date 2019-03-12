import React from 'react';
import { Media } from 'reactstrap';

const Mondok = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object data-src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/poster.jpg?alt=media&token=eeabff82-5d54-40fa-93ca-8f7bb208f6a6" alt="" />
      </Media>
      <Media body>
        <Media heading>
        KABAR GEMBIRA UNTUK KAMU YANG PASSION DIBIDANG IT
        </Media>
        Santren Koding saat ini sedang membuka pendaftaran santri baru.
        Bidang keahlian yang dibuka adalah Mobile Development dan Web Development dengan jenjang 3 tahun lama masa pembelajaran dan live project.
       
      </Media>
    </Media>
  );
};

export default Mondok;