package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import com.example.demo.entity.Blog;
import com.example.demo.repository.BlogRespository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class BlogController {

    @Autowired
    BlogRespository blogRespository;

    @GetMapping("/blog")
    public List<Blog> index() {
        return blogRespository.findAll();
    }

    @GetMapping("/blog/{id}")
    public Blog show(@PathVariable String id) {
        int blogId = Integer.parseInt(id);
        return blogRespository.findById(blogId).orElse(null);
    }

    @PostMapping("/blog/search")
    public List<Blog> search(@RequestBody Map<String, String> body) {
        String searchTerm = body.get("text");
        return blogRespository.findByJudulContainingOrPenerbitContainingOrPengarangContainingOrTahunContaining(
                searchTerm, searchTerm, searchTerm, searchTerm);
    }

    @PostMapping("/blog")
    public Blog create(@RequestBody Map<String, String> body) {
        String pengarang = body.get("pengarang");
        String judul = body.get("judul");
        String penerbit = body.get("penerbit");
        String tahun = body.get("tahun");
        return blogRespository.save(new Blog(pengarang, judul, penerbit, tahun));
    }

    @PutMapping("/blog/{id}")
    public Blog update(@PathVariable String id, @RequestBody Map<String, String> body) {
        int blogId = Integer.parseInt(id);
        Blog blog = blogRespository.findById(blogId).orElse(null);
        blog.setPengarang(body.get("pengarang"));
        blog.setJudul(body.get("judul"));
        blog.setPenerbit(body.get("penerbit"));
        blog.setTahun(body.get("tahun"));
        System.out.println(blog);
        return blogRespository.save(blog);
    }

    @DeleteMapping("blog/{id}")
    public boolean delete(@PathVariable String id) {
        int blogId = Integer.parseInt(id);
        blogRespository.deleteById(blogId);
        return true;
    }

}