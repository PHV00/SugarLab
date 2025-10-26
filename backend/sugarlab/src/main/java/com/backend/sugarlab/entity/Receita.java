package com.backend.sugarlab.entity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "receita")
public class Receita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String titulo;
    
    @OneToMany(mappedBy = "receita", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Curso> cursos;

    @ManyToMany
    @JoinTable(
        name = "receita_alimento",
        joinColumns = @JoinColumn(name = "receita_id"),
        inverseJoinColumns = @JoinColumn(name = "alimento_id")
    )
    private Set<Alimento> alimentos = new HashSet<>();

    public Receita() {}
}
