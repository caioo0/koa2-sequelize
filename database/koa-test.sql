/*
 Navicat Premium Data Transfer

 Source Server         : 172.27.36.108_3309(docker)
 Source Server Type    : MySQL
 Source Server Version : 80033
 Source Host           : 172.27.36.108:3309
 Source Schema         : koa-test

 Target Server Type    : MySQL
 Target Server Version : 80033
 File Encoding         : 65001

 Date: 26/04/2023 11:52:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int unsigned NOT NULL COMMENT '主键ID',
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '角色名',
  `status` tinyint unsigned NOT NULL COMMENT '状态',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, '帅哥', 1);
INSERT INTO `role` VALUES (2, '大帅哥', 1);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int unsigned NOT NULL COMMENT '主键ID',
  `user` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户名',
  `status` tinyint unsigned NOT NULL COMMENT '状态',
  `role_id` int unsigned NOT NULL COMMENT '关联role',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '吴彦祖', 1, 1);
INSERT INTO `user` VALUES (2, '彭于晏', 2, 1);
INSERT INTO `user` VALUES (3, '路人高', 1, 2);

SET FOREIGN_KEY_CHECKS = 1;
