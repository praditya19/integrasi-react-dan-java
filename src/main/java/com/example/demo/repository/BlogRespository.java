package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.example.demo.entity.Blog;

@Repository
public interface BlogRespository extends JpaRepository<Blog, Integer> {

    @Query(value = "select * from blog b where b.pengarang like %:textPengarang% or b.penerbit like %:textPenerbit% or b.tahun like %:textTahun% or b.judul like %:textJudul%", nativeQuery = true)
    List<Blog> findByJudulContainingOrPenerbitContainingOrPengarangContainingOrTahunContaining(String textPengarang,
            String textPenerbit, String textTahun, String textJudul);

}