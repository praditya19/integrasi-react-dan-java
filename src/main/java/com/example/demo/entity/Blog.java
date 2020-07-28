package com.example.demo.entity;

import javax.persistence.*;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String pengarang;
    private String judul;
    private String penerbit;
    private String tahun;

    public Blog() {
    }

    public Blog(String pengarang, String judul, String penerbit, String tahun) {
        this.setPengarang(pengarang);
        this.setJudul(judul);
        this.setPenerbit(penerbit);
        this.setTahun(tahun);
    }

    public Blog(int id, String pengarang, String judul, String penerbit, String tahun) {
        this.setId(id);
        this.setPengarang(pengarang);
        this.setJudul(judul);
        this.setPenerbit(penerbit);
        this.setTahun(tahun);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPengarang() {
        return pengarang;
    }

    public void setPengarang(String pengarang) {
        this.pengarang = pengarang;
    }

    public String getJudul() {
        return judul;
    }

    public void setJudul(String judul) {
        this.judul = judul;
    }

    public String getPenerbit() {
        return penerbit;
    }

    public void setPenerbit(String penerbit) {
        this.penerbit = penerbit;
    }

    public String getTahun() {
        return tahun;
    }

    public void setTahun(String tahun) {
        this.tahun = tahun;
    }

    @Override
    public String toString() {
        return "Blog{" + "id=" + id + ", pengarang='" + pengarang + '\'' + ", judul='" + judul + '\'' + ", penerbit='"
                + penerbit + '\'' + ", tahun='" + tahun + '\'' + '}';
    }
}