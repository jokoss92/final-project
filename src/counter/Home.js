import React, { Component } from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import { Button } from 'reactstrap';
export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Jumbotron />
				<div className="text-center m-4">
					<h2>Daftar Kajian Koding Rutin</h2>
				</div>
				<div className="row container-fluid">
					<div className="col-md-4">
						<Card
							title="Kajian Koding #3"
							text="ReactJS dan Firebase Auth/Hosting"
							img="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
						/>
					</div>
					<div className="col-md-4">
						<Card
							title="Kajian Koding #2"
							text="html, css, boostrap dasar"
							img="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
						/>
					</div>
					<div className="col-md-4">
						<Card
							title="Kajian Koding #1"
							text="Belajar Laravel Dasar"
							img="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
						/>
					</div>
				</div>
				<div className="text-center m-4">
					<Button>Lihat Selengkapnya</Button>
				</div>
				<div className="container">
					<div className="row text-center">
						<div className="col-md-6 bg-success pt-4 pb-4">
							<h4>Kegiatan</h4>
							<p>Koding</p>
							<p>Belajar Agama dan Al Qur'an</p>
							<p>Pendidikan Karakter</p>
						</div>
						<div className="col-md-6 pt-4">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc"
								alt=""
								srcset=""
							/>
							<h4>"Memberi Manfaat untuk Ummat"</h4>
							<p>-Santren Koding-</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row text-center">
						<div className="col-md-12 pt-4 pb-4">
							<h3>Kontak</h3>
							<p>082225111587</p>
							<p>Titik Ruang Space,</p>
							<p>Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,</p>
							<p>Kota Semarang, Jawa Tengah 50269</p>
						</div>
						
					</div>
				</div>	
			</div>
		);
	}
}
