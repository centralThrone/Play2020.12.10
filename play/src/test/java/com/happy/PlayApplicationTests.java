package com.happy;

import com.happy.controller.FacilitiesTableController;
import com.happy.controller.LineTableController;
import com.happy.mapper.CollectionTableMapper;
import com.happy.mapper.FacilitiesTableMapper;
import com.happy.mapper.LineTableMapper;
import com.happy.pojo.CollectionTable;
import com.happy.pojo.FacilitiesTable;
import com.happy.pojo.LineTable;
import com.happy.pojo.Project;
import com.happy.service.FacilitiesTableService;
import com.happy.service.Impl.FacilitiesTableServiceImpl;
import com.happy.service.LineTableService;
import com.happy.service.ProjectService;
import com.happy.service.UserLineTableService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.ui.Model;

import javax.annotation.Resource;
import java.util.List;

@SpringBootTest
class PlayApplicationTests {
    @Autowired
    ProjectService service;
    @Autowired
    FacilitiesTableMapper facilitiesTableMapper;
    @Autowired
    LineTableController lineTableController;
    @Autowired
    LineTableService lineTableService;
    @Autowired
    UserLineTableService userLineTableService;
    @Autowired
    FacilitiesTableController controller;
    @Test
    void contextLoads() {
        //LineTable q=lineTableService.selectById(2L);
        //List<FacilitiesTable> q=service.list(null);
        //System.out.println(q+"\n");
        //List<LineTable> q2=lineTableService.likeFName("waiting_time",0);
        //for (LineTable table : q2) {
        //    System.out.println(table);
        //}

//        FacilitiesTable table = new FacilitiesTable();
//        table.setStartTimeString("14:00");

//        List<FacilitiesTable> tables = service.likeFName("f_name","极地");
//        for (FacilitiesTable table : tables) {
//            System.out.println(table);
//        }

        //controller.selectAll();
        //System.out.println(service.insert(table));

        //Line表的service测试
        //System.out.println(lineTableService.selectOneByFacilitiesId(7L));

        //LineController.choosePerson测试
        lineTableController.toChoosePerson();
    }
}
