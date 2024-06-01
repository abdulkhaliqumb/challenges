--no.1:
SELECT  nim,nama,alamat,umur,nama_jurusan 
FROM mahasiswa 
JOIN jurusan USING (jurusan_id);

--no.2:
SELECT  m.*
FROM mahasiswa m
WHERE m.umur < 20;

--no.3:
SELECT  m.nim,m.nama,mk.nama,k.nilai
FROM mahasiswa m
JOIN jurusan j ON  j.jurusan_id=m.jurusan_id
JOIN kontrak k ON  k.nim=m.nim
JOIN mata_kuliah mk  ON mk.matkul_id=k.matkul_id
WHERE k.nilai in ('A','B');


--no.4:
SELECT  m.nim,m.nama,SUM(mk.sks) as total_sks
FROM mahasiswa m
JOIN kontrak k ON  k.nim=m.nim
JOIN mata_kuliah mk  ON mk.matkul_id=k.matkul_id
GROUP BY m.nim having total_sks > 10;


--no.5:
SELECT  m.nim,m.nama,mk.nama
FROM mahasiswa m
JOIN kontrak k ON  k.nim=m.nim
JOIN mata_kuliah mk  ON mk.matkul_id=k.matkul_id
WHERE mk.nama = 'data mining';


--no.6
SELECT d.nama,count(k.nim) AS tot_mahasiswa 
FROM dosen d
LEFT JOIN kontrak k ON k.nip=d.nip
LEFT JOIN mahasiswa m ON  m.nim=k.nim
GROUP BY d.nama

--7
SELECT  nim,nama,alamat,umur
FROM mahasiswa 
ORDER BY umur;

--8a
SELECT m.*,j.nama_jurusan,d.nama,k.nilai
FROM kontrak k 
JOIN dosen d ON k.nip=d.nip
JOIN mahasiswa m ON  m.nim=k.nim
JOIN jurusan j ON  j.jurusan_id=m.jurusan_id
WHERE  k.nilai in ('D','E') ;


--8b
SELECT m.*,j.nama_jurusan,d.nama,k.nilai
FROM kontrak k , dosen d ,mahasiswa m,jurusan j
WHERE  k.nip=d.nip 
AND m.nim=k.nim 
AND j.jurusan_id=m.jurusan_id
AND k.nilai in ('D','E') ;



