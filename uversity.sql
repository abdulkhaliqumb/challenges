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

CREATE TABLE daftar_kelas (
kelas_id CHARACTER(6)  PRIMARY KEY NOT NULL,
matkul_id CHARACTER(3) NOT NULL,
nip CHARACTER(5) NOT NULL,
FOREIGN KEY (matkul_id) REFERENCES mata_kuliah(matkul_id),
FOREIGN KEY (nip) REFERENCES dosen(nip) );

INSERT INTO daftar_kelas VALUES 
('K00001','M01','D0001'),
('K00002','M02','D0002'),
('K00003','M03','D0001'),
('K00004','M04','D0002'),
('K00005','M05','D0003'),
('K00006','M06','D0001'),
('K00007','M06','D0002'),
('K00008','M06','D0003');

CREATE TABLE mhs_ambil_kelas (
id CHARACTER(6)  PRIMARY KEY NOT NULL,
kelas_id CHARACTER(6)  NOT NULL,
nim CHARACTER(9) NOT NULL,
nilai  INT NOT NULL,
periode VARCHAR(20) NOT NULL,
tahun_ajaran CHARACTER(4) NOT NULL,
FOREIGN KEY (kelas_id) REFERENCES daftar_kelas(kelas_id),
FOREIGN KEY (nim) REFERENCES mahasiswa(nim));

INSERT INTO mhs_ambil_kelas VALUES 
('T00001','K00001','202400001',89,'Genap','2024'),
('T00002','K00002','202400001',79,'Genap','2024'),
('T00003','K00003','202400001',69,'Genap','2024'),
('T00004','K00004','202400001',99,'Genap','2024'),
('T00005','K00005','202400001',86,'Genap','2024'),
('T00006','K00006','202400002',81,'Genap','2024'),
('T00007','K00007','202400003',88,'Genap','2024'),
('T00009','K00008','202400004',89,'Genap','2024'),
('T00010','K00009','202400005',80,'Genap','2024'),
('T00011','K00010','202400006',93,'Genap','2024'),
('T00012','K00001','202400002',91,'Genap','2024'),
('T00013','K00002','202400003',89,'Genap','2024');