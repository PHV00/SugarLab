package com.backend.sugarlab.DTO;

import com.backend.sugarlab.enums.Status;
import lombok.Data;

@Data
public class CursoCadastroDto {
    private String slug;
    private String title;
    private String description;
    private String summary;
    private String thumbnailUrl;
    private String highlights;
    private String includes;
    private String dateRange;
    private String timeRange;
    private String modality;
    private Integer workloadHours;
    private Double price;
    private Status status;
    private Boolean featured;
    private Integer assinaturaId;
    private Integer receitaId;
}
