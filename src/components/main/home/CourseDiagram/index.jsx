import React from "react";
import { Tree } from "react-d3-tree";
import useCourseMap from "../../../../hooks/useCourseMap";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
const CourseDiagram = () => {
  const { data } = useCourseMap();
  const navigate = useNavigate();

  return (
    <Box w={"100%"} h={"600px"} bg={"gray.200"} rounded={"lg"}>
      <Tree
        data={data}
        zoom={0.7}
        orientation="horizontal"
        initialDepth={1}
        collapsible={true}
        draggable={true}
        translate={{ x: 300, y: 50 }}
        nodeSize={{ x: 400, y: 80 }}
        pathFunc={"straight"}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        enableLegacyTransitions
        hasInteractiveNodes
        onNodeClick={(ev) => {
          if (ev.data.children) {
            navigate(ev.data?.url?.split("/").slice(-2).join("/"));
          }
        }}
      />
    </Box>
  );
};

export default CourseDiagram;
