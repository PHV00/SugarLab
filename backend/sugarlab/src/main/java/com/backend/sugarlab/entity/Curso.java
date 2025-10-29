package com.backend.sugarlab.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import java.time.LocalDateTime;
import java.math.BigDecimal;

import lombok.Data;
import com.backend.sugarlab.enums.Status;

@Data
@Entity
@Table(name = "curso")
public class Curso {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;  // corresponde a id INT AUTO_INCREMENT PRIMARY KEY

    @Column(nullable = false, unique = true, length = 255)
    private String slug; // slug VARCHAR(255) UNIQUE

    @Column(nullable = false, length = 255)
    private String title; // title VARCHAR(255) NOT NULL

    @Lob
    private String description; // description TEXT

    @Lob
    private String summary; // summary TEXT

    @Column(name = "thumbnail_url", length = 255)
    private String thumbnailUrl; // thumbnail_url VARCHAR(255)

    // @Type(value = JsonStringType.class)
    @Column(columnDefinition = "JSON", nullable = true)
    private String highlights;
    // private List<String> highlights;

    @Column(length = 255)
    private String includes; // includes VARCHAR(255)

    @Column(name = "date_range", length = 100)
    private String dateRange; // date_range VARCHAR(100)

    @Column(name = "time_range", length = 100)
    private String timeRange; // time_range VARCHAR(100)

    @Column(length = 100)
    private String modality; // modality VARCHAR(100)

    @Column(name = "workload_hours")
    private Integer workloadHours; // workload_hours INT

    @Column(precision = 10, scale = 2)
    private BigDecimal price;

    private Boolean featured = false; // featured TINYINT(1) DEFAULT 0

    @Enumerated(EnumType.STRING)
    private Status status = Status.Rascunho; // status ENUM('Rascunho','Publicado')

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now(); // created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    @ManyToOne
    @JoinColumn(name = "receita_id")
    private Receita receita;

    @ManyToOne
    @JoinColumn(name = "modalidade_id")
    private Modalidade modalidade;

    @OneToMany(mappedBy = "curso", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Assinatura> assinaturas;

    public Curso() {}
}