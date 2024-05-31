CREATE TABLE jurusan (
jurusan_id CHARACTER(3) PRIMARY KEY NOT NULL,
nama_jurusan VARCHAR(100) NOT NULL);

INSERT INTO jurusan VALUES 
('J01','Teknik Informatika'), 
('J02','Manajemen Informatika'), 
('J03','System Komputer'); 


CREATE TABLE mahasiswa(
nim CHARACTER(9) PRIMARY KEY NOT NULL,
nama VARCHAR(100) NOT NULL,
alamat VARCHAR(150) NOT NULL,
jurusan_id  CHARACTER(3) NOT NULL,
FOREIGN KEY (jurusan_id) REFERENCES jurusan(jurusan_id));

INSERT INTO mahasiswa VALUES 
('202400001','Andi Suherman','Jl.Mandoran Jakarta','J01'),
('202400002','Caca Marica','Jl.Kemangi Jakarta','J01'),
('202400003','Hakim Merdeka','Jl.Bunga Jakarta','J02'),
('202400004','Toni Vernandes','Jl.Mawar Jakarta','J02'),
('202400005','Ruud Gullit','Jl.Peluru Jakarta','J03'),
('202400006','Mike Tyson','Jl.Granat Jakarta','J03');

CREATE TABLE dosen(
nip CHARACTER(5) PRIMARY KEY NOT NULL,
nama VARCHAR(100) NOT NULL);

INSERT INTO dosen VALUES 
('D0001','Onno Purbo,Phd'),
('D0002','Rudi Lumanto,Phd'),
('D0003','Mardi Bros,Phd'),
('D0004','Harwi Karya,Phd');

CREATE TABLE mata_kuliah (
matkul_id CHARACTER(3) PRIMARY KEY NOT NULL,
nama VARCHAR(100) NOT NULL,
sks INTEGER NOT NULL);

INSERT INTO mata_kuliah VALUES 
('M01','Linux Foundation',3),
('M02','Komunikasi Data',3),
('M03','Cyber Security 1',3),
('M04','Cyber Security 2', 3),
('M05','Cyber Security 3',3),
('M06','Bahasa Rakitan 3',3);

CREATE TABLE kontrak (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nim CHARACTER(9) NOT NULL ,
matkul_id CHARACTER(3) NOT NULL,
nip CHARACTER(5) NOT NULL,
nilai VARCHAR(1) ,
FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
FOREIGN KEY (matkul_id) REFERENCES mata_kuliah(matkul_id),
FOREIGN KEY (nip) REFERENCES dosen(nip) );

INSERT INTO kontrak(nim,matkul_id,nip,nilai) VALUES 
('202400001','M01','D0001','A'),
('202400002','M02','D0002','B'),
('202400003','M03','D0001','C'),
('202400004','M04','D0002','A'),
('202400005','M05','D0003','A'),
('202400006','M06','D0001','B'),
('202400002','M06','D0002','A'),
('202400003','M06','D0003','A');

